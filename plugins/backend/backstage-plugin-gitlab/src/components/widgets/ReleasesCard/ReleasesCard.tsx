/*
 * Copyright 2022 Nokia
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Grid } from '@material-ui/core';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import Alert from '@material-ui/lab/Alert';
import {
    InfoCard,
    InfoCardVariants,
    Progress,
} from '@backstage/core-components';
import { GitlabCIApiRef } from '../../../api';
import { useApi } from '@backstage/core-plugin-api';
import { useAsync } from 'react-use';
import {
    gitlabProjectId,
    gitlabProjectSlug,
    gitlabInstance,
} from '../../gitlabAppData';
import { rcompare, valid, prerelease } from 'semver';
import { ReleaseSchema } from '@gitbeaker/rest';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
    infoCard: {
        marginBottom: theme.spacing(3),
        '& + .MuiAlert-root': {
            marginTop: theme.spacing(3),
        },
    },
    releaseTitle: {
        ...theme.typography.h6,
        margin: 0,
        marginRight: '0.5rem',
    },
    releaseTagIcon: {
        verticalAlign: 'middle',
    },
    sortSelector: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}));

export type sortRule = 'releasedVersion' | 'releasedDate';

const sortFunctions: Record<
    sortRule,
    (a: ReleaseSchema, b: ReleaseSchema) => number
> = {
    // sort (e.g. v1.2.3 comes before v1.2.3-alpha-4.5) and walk through list of releases
    // NOTE: rcompare sorts descending, but full release comes before release candidates (v1.2.3 before v1.2.3-alpha-4.5)
    // use string comparison for non-compliant tags
    releasedVersion: (a: ReleaseSchema, b: ReleaseSchema): number => {
        try {
            return rcompare(a.tag_name, b.tag_name);
        } catch (error) {
            return a.tag_name > b.tag_name ? 1 : -1;
        }
    },
    // sort by released date
    releasedDate: (a: ReleaseSchema, b: ReleaseSchema): number => {
        const d1 = new Date(a.released_at || a.created_at);
        const d2 = new Date(b.released_at || b.created_at);
        return d1.getTime() > d2.getTime() ? -1 : 1;
    },
};

/**
 * Properties for {@link ReleasesCard}
 *
 * @public
 */
export interface ReleasesCardProps {
    /**
     * Filter
     *
     * all - show all releases (default)
     * patch - major, minor, patch - no pre-releases
     *
     */
    show?: string;
    /**
     * Limit - show only a maximum number of releases
     */
    limit?: number;

    /**
     * Sort - Determines the order of releases
     * @default 'releasedDate'
     */
    sort?: sortRule;

    /**
     * Determines if the sort selector should be shown
     */
    showSortSelector?: boolean;

    /**
     * Determines InfoCard variant
     */
    variant?: InfoCardVariants;
}

function makeFilter(
    show: string
): (value: ReleaseSchema, index: number, array: ReleaseSchema[]) => boolean {
    switch (show) {
        case 'patch':
            return (value) => {
                try {
                    return prerelease(value.tag_name) === null;
                } catch (error) {
                    return true;
                }
            };
        case 'all':
        default:
            return () => true;
    }
}

/**
 * ReleasesCard
 *
 * @public
 */
export const ReleasesCard = (props: ReleasesCardProps) => {
    const {
        show = 'all',
        limit = 6,
        sort = 'releasedDate',
        showSortSelector = true,
    } = props;
    const classes = useStyles();
    const project_id = gitlabProjectId();
    const project_slug = gitlabProjectSlug();
    const gitlab_instance = gitlabInstance();
    const [currentSortRule, setCurrentSortRule] = React.useState(sort);

    const GitlabCIAPI = useApi(GitlabCIApiRef).build(
        gitlab_instance || 'gitlab.com'
    );
    /* TODO: to change the below logic to get contributors data*/
    const { value, loading, error } = useAsync(async () => {
        const projectDetails = await GitlabCIAPI.getProjectDetails(
            project_slug || project_id
        );

        if (!projectDetails)
            throw new Error('wrong project_slug or project_id');

        const releaseData = await GitlabCIAPI.getReleasesSummary(
            projectDetails.id
        );

        if (!releaseData) throw new Error('Release data are undefined!');

        return {
            releases: releaseData,
            projectDetails,
        };
    }, []);

    const project_web_url = value?.projectDetails.web_url;

    if (loading) {
        return <Progress />;
    } else if (error) {
        return (
            <Alert severity="error" className={classes.infoCard}>
                {error.message}
            </Alert>
        );
    }
    // shortest prefix match to dedupe the list, i.e.
    // prefer full releases, e.g. when v1.2.3 exists, we drop all pre-releases v1.2.3-*
    // prefer the latest in a series of pre-releases
    let releases: ReleaseSchema[] = [];
    if (value?.releases != null) {
        value?.releases
            .filter(makeFilter(show))
            .sort(sortFunctions[currentSortRule])
            .forEach((release) => {
                // always add invalid release names
                if (!valid(release.tag_name)) {
                    releases.push(release);
                    return;
                }
                // see if there's already a release whose tag_name is a prefix of the current item's tag_name
                const idx = releases.findIndex((value) => {
                    return release.tag_name.startsWith(value.tag_name);
                });
                // if no item was found, the version is not yet in the list
                if (idx < 0) releases.push(release);
            });
    }
    // sort the remaining releases in descending order (latest release first)
    releases = releases.slice(0, limit);

    if (releases.length === 0) {
        return <></>;
    }

    const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCurrentSortRule(event.target.value as sortRule);
    };

    return (
        <InfoCard
            title="Releases"
            deepLink={{
                link: `${project_web_url}/-/releases`,
                title: 'go to Releases',
                onClick: (e) => {
                    e.preventDefault();
                    window.open(`${project_web_url}/-/releases`);
                },
            }}
            variant={props.variant}
            className={classes.infoCard}
        >
            <Grid container spacing={2} justifyContent="flex-start">
                {showSortSelector && (
                    <div className={classes.sortSelector}>
                        <Select
                            id="release-sort-selector"
                            value={currentSortRule}
                            onChange={handleSortChange}
                        >
                            <MenuItem value="releasedDate">
                                Released Date
                            </MenuItem>
                            <MenuItem value="releasedVersion">
                                Released Version
                            </MenuItem>
                        </Select>
                        <SortIcon />
                    </div>
                )}
                {releases.map((release) => (
                    <Grid item key={release.tag_name}>
                        <Link
                            href={
                                project_web_url +
                                '/-/releases/' +
                                encodeURIComponent(release.tag_name)
                            }
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={classes.releaseTitle}>
                                {release.name}
                            </div>
                            <LocalOfferOutlinedIcon
                                fontSize="inherit"
                                className={classes.releaseTagIcon}
                            />
                            {release.tag_name}
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </InfoCard>
    );
};

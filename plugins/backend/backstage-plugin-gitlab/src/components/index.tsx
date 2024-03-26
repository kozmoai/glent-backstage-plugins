import React from 'react';

import { Entity } from '@backstage/catalog-model';
import { useEntity } from '@backstage/plugin-catalog-react';
import { GitlabCI } from './GitlabCI';
import {
    LinkButton,
    MissingAnnotationEmptyState,
} from '@backstage/core-components';

import {
    GITLAB_ANNOTATION_PROJECT_ID,
    GITLAB_ANNOTATION_PROJECT_SLUG,
} from './gitlabAppData';
export * from './gitlabAppData';

export const isGitlabAvailable = (entity: Entity) =>
    isGitlabProjectIDAnnotationAvailable(entity) ||
    isGitlabSlugAnnotationAvailable(entity);

export const isGitlabProjectIDAnnotationAvailable = (entity: Entity) =>
    Boolean(entity.metadata.annotations?.[GITLAB_ANNOTATION_PROJECT_ID]);

export const isGitlabSlugAnnotationAvailable = (entity: Entity) =>
    Boolean(entity.metadata.annotations?.[GITLAB_ANNOTATION_PROJECT_SLUG]);

export const Router = () => {
    const { entity } = useEntity();

    if (isGitlabAvailable(entity)) {
        return <GitlabCI />;
    }

    return (
        <>
            <MissingAnnotationEmptyState
                annotation={GITLAB_ANNOTATION_PROJECT_ID}
            />
            <MissingAnnotationEmptyState
                annotation={GITLAB_ANNOTATION_PROJECT_SLUG}
            />
            <LinkButton
                variant="contained"
                color="primary"
                to="https://github.com/kozmoai/backstage-plugin-gitlab/blob/main/README.md"
            >
                Read Gitlab Plugin Docs
            </LinkButton>
        </>
    );
};

import {
    Avatar,
    StatusAborted,
    StatusOK,
    StatusPending,
    TableColumn,
} from '@backstage/core-components';
import { Box, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import React from 'react';
import type { IssueSchema } from '@gitbeaker/rest';

export const IssueStateIndicator = (
    issueObject: IssueSchema
): TableColumn<Record<string, unknown>> => {
    switch (issueObject.state) {
        case 'opened':
            return <StatusPending>open</StatusPending>;
        case 'closed':
            return <StatusOK>close</StatusOK>;
        default:
            return <StatusAborted />;
    }
};

export function IssueTitle(
    issueObject: IssueSchema
): TableColumn<Record<string, unknown>> {
    return (
        <Typography variant="body2" noWrap>
            <Box ml={1} component="span">
                <Link href={issueObject.web_url} target="_blank">
                    {issueObject.title}
                </Link>
            </Box>
        </Typography>
    );
}

export function AuthorColumn(
    issueObject: IssueSchema
): TableColumn<Record<string, unknown>> {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
                customStyles={{ width: 32, height: 32 }}
                picture={issueObject.author.avatar_url}
                displayName={issueObject.author.username}
            />
            <Typography variant="body2" noWrap>
                <Box ml={1} component="span">
                    <Link href={issueObject.author.web_url} target="_blank">
                        {issueObject.author.username}
                    </Link>
                </Box>
            </Typography>
        </Box>
    );
}

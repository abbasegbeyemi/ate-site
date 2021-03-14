/** @jsx jsx */
import CMS from 'netlify-cms-app';
import React from 'react';
import { jsx } from 'theme-ui';

CMS.registerPreviewStyle('styles.css');

const ArticlePreview = ({ entry, getAsset, widgetFor }) => {
    const title = entry.getIn(['data', 'title']);
    const image = entry.getIn(['data', 'image']);
    const author = entry.getIn(['data', 'author']);
    return (
        <article>
            <h1>{title}</h1>
            <h3>{`By: ${author}`}</h3>
            <div>
                <img className={'headerImage'} src={getAsset(image)} />
            </div>
            {widgetFor('body')}
        </article>
    );
};

const BioPreview = ({ entry, getAsset, widgetFor }) => {
    const name = entry.getIn(['data', 'name']);
    const title = entry.getIn(['data', 'title']);
    const image = entry.getIn(['data', 'image']);
    return (
        <article>
            <h1>{name}</h1>
            <h3>{title}</h3>
            <div>
                <img className={'headerImage'} src={getAsset(image)} />
            </div>
            {widgetFor('body')}
        </article>
    );
};

CMS.registerPreviewTemplate('articles', ArticlePreview);
CMS.registerPreviewTemplate('bios', BioPreview);

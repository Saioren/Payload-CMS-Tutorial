import { Hero } from "../../blocks/Hero";
import { SimpleRichText } from "../../blocks/SimpleRichText";
import { TwoColumn } from "../../blocks/TwoColumn";
import getCollectionSchemaHandler from "./handlers/getCollectionSchemaHandler";
import AttributesHelper from "./ui/AttributesHelper.jsx";

export const PageTemplates = {
    slug: 'pageTemplates',
    labels: {
        singular: 'Page Template',
        plural: 'Page Templates',
    },
    access: {
        read: () => true,
    },
    endpoints: [
        {
            path: '/getCollectionSchema/:collection',
            method: 'get',
            handler: getCollectionSchemaHandler,
        }
    ],
    fields: [
        {
            name: 'attributesHelper',
            type: 'ui',
            admin: {
                components: {
                    Field: AttributesHelper,
                }
            }
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
        },
        {
            name: 'templateCollection',
            label: 'Collection',
            type: 'select',
            options: [
                { label: 'Pages', value: 'pages' },
                { label: 'Blog Posts', value: 'blogPosts' }
            ]
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [
                Hero,
                TwoColumn,
                SimpleRichText
            ]
        }
    ]
}
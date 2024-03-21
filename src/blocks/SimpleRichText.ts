import { Block } from "payload/types";

export const SimpleRichText: Block = {
    slug: 'simpleRichText',
    labels: {
        singular: 'Simple Rich Text Block',
        plural: 'Simple Rich Text Blocks',
    },
    fields: [
        {
            name: 'body',
            label: 'Body',
            type: 'richText',
        },
    ],
}
import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// Component
import { PageHeader, PageHeaderTitle } from '@red-hat-insights/insights-frontend-components';

// README
import PageHeaderReadme from '../../docs/components/pageHeader/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Components', module)
    .addDecorator(withReadme(PageHeaderReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Page Header',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                const label = text('Label', 'Hello World!');
                                return(
                                    <PageHeader>
                                        <PageHeaderTitle title = {label}/>
                                    </PageHeader>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )
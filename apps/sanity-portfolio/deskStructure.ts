import {
  DocumentIcon,
  HomeIcon,
  RocketIcon,
  StackCompactIcon,
  ThListIcon,
  UserIcon,
} from '@sanity/icons';
import type { StructureBuilder } from 'sanity/structure';

export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Page Content
      S.listItem()
        .title('Page Content')
        .icon(DocumentIcon)
        .child(
          S.list()
            .title('Page Content')
            .items([
              S.listItem()
                .title('Home')
                .icon(HomeIcon)
                .child(
                  S.document().schemaType('homePage').documentId('homePage')
                ),
              // ...S.documentTypeListItems().filter(
              //   (listItem) => !['homePage'].includes(listItem.getId() ?? '')
              // ),
              S.listItem()
                .title('About')
                .icon(UserIcon)
                .child(
                  S.document().schemaType('aboutMe').documentId('aboutMe')
                ),
              S.listItem()
                .title('Projects')
                .icon(RocketIcon)
                .child(
                  S.document()
                    .schemaType('projectsPage')
                    .documentId('projectsPage')
                ),
              // S.listItem()
              //   .title('Posts')
              //   .icon(DocumentIcon)
              //   .child(S.document().schemaType('posts').documentId('posts')),
              // S.listItem()
              //   .title('Contact')
              //   .icon(EnvelopeIcon)
              //   .child(
              //     S.document().schemaType('contact').documentId('contact')
              //   ),
            ])
        ),

      // Project Collection
      S.listItem()
        .title('Project Collection')
        .icon(StackCompactIcon)
        .child(S.documentTypeList('project')),

      // Tech Stacks
      S.listItem()
        .title('Tech Stack Tags')
        .child(
          S.list()
            .title('Tech Stack Tags')
            .items([
              S.listItem()
                .title('Tag Categories')
                .child(
                  S.documentTypeList('tag-category').title('Tag Categories')
                ),
              S.listItem()
                .title('Tags By Category')
                .child(
                  S.documentTypeList('tag-category')
                    .title('Tags By Category')
                    .child((category) =>
                      S.documentList()
                        .title('Tags')
                        .filter(
                          '_type == "all-tags" && $category == category._ref'
                        )
                        .params({ category })
                    )
                ),
              S.divider(),
              S.listItem()
                .title('All Tags')
                .child(S.documentTypeList('all-tags').title('All Tags')),
            ])
        ),

      // SEO
      S.listItem()
        .title('SEO')
        .icon(StackCompactIcon)
        .child(S.documentTypeList('seoSchema')),

      // Page Widgets
      S.listItem()
        .title('Page Widgets')
        .icon(ThListIcon)
        .child(
          S.list()
            .title('Page Widgets')
            .items([
              S.listItem()
                .title('Site Logo')
                .child(
                  S.document().schemaType('siteLogo').documentId('siteLogo')
                ),
              S.listItem()
                .title('Navigation Links')
                .child(
                  S.document()
                    .schemaType('navigationLinks')
                    .documentId('navigationLinks')
                ),
              S.listItem()
                .title('Social Links')
                .child(
                  S.document()
                    .schemaType('socialLinks')
                    .documentId('socialLinks')
                ),
              S.listItem()
                .title('Copyright')
                .child(
                  S.document().schemaType('copyright').documentId('copyright')
                ),
            ])
        ),

      // Site Settings
      S.listItem()
        .title('Site Settings')
        // .icon(SettingsIcon)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);

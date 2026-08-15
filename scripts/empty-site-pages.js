hexo.extend.generator.register('empty-site-pages', (locals) => {
  if (locals.posts.length > 0) return [];

  const pagination = (base) => ({
    posts: locals.posts,
    current: 1,
    total: 1,
    prev: 0,
    next: 0,
    prev_link: '',
    next_link: '',
    base
  });

  return [
    {
      path: 'index.html',
      data: pagination('/'),
      layout: ['index']
    },
    {
      path: 'archives/index.html',
      data: {
        ...pagination('/archives/'),
        archive: true,
        year: false,
        month: false
      },
      layout: ['archive']
    },
    {
      path: 'atom.xml',
      data: `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>crimson000</title>
  <link href="https://crimson000000.github.io/atom.xml" rel="self"/>
  <link href="https://crimson000000.github.io/"/>
  <updated>2026-08-15T00:00:00.000Z</updated>
  <id>https://crimson000000.github.io/</id>
  <author><name>crimson000</name></author>
</feed>
`,
      layout: false
    }
  ];
});

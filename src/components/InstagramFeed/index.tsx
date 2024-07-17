'use client';

import React from 'react';

type Post = {
  id: string;
  caption: string;
  media_url: string;
  media_type: 'IMAGE' | 'CAROUSEL_ALBUM' | 'VIDEO';
  timestamp: string;
  permalink: string;
  children: {
    data: {
      id: string;
      media_url: string;
    }[];
  };
};

type Props = {
  accessToken: string;
}

function InstagramPost(props: Post) {
  const media = props.media_type === 'CAROUSEL_ALBUM' ? props.children.data[0] : props;
  return (
    <a href={props.permalink}>
      <img src={media.media_url} alt={props.caption} className='object-cover aspect-square w-full rounded-md' />
    </a>
  );
}

export default function InstagramFeed({ accessToken }: Props) {
  const [feed, setFeed] = React.useState<Post[]>([]);
  React.useEffect(() => {
    async function loadFeed() {
      const resp = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink,children{media_url}&limit=20&access_token=${accessToken}`);
      const json: { data: Post[] } = await resp.json();
      setFeed(json.data);
    }

    loadFeed();
  }, [accessToken]);
  return (
    <div className="grid grid-cols-4 gap-4">
      {feed.filter((post) => post.media_type !== 'VIDEO' && post.media_url).slice(0, 4).map((post) => {
        return <InstagramPost key={post.id} {...post} />;
      })}
    </div>
  );
}

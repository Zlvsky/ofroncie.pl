import React from 'react';
import BigContainer from '../layout/BigContainer';
import FeaturedPost from '../blog/postsListing/featuredPost/FeaturedPost';
import { Post } from '@/types/Posts';
import PostCard from '../blog/postsListing/postCard/PostCard';

function MainPagePosts({ posts }: { posts: Post[] }) {
    const { title, excerpt, category, image, slug, timeToRead } = posts[0];
    const otherPosts = posts.slice(1,4);

    return (
      <div className="w-full bg-lightBg rounded-t-[3.75rem] h-full">
        <BigContainer>
          <div className="flex flex-col w-full py-24 gap-20">
            <FeaturedPost
              key={title}
              path={`/blog/${slug}`}
              heading={title}
              excerpt={excerpt}
              category={category}
              image={image}
              timeToRead={timeToRead}
              variant="LIGHT"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6">
              {otherPosts.map((post) => (
                <PostCard
                  key={post.title}
                  path={`/blog/${post.slug}`}
                  heading={post.title}
                  category={post.category}
                  excerpt={post.excerpt}
                  image={post.image}
                  timeToRead={post.timeToRead}
                  variant="LIGHT"
                />
              ))}
            </div>
          </div>
        </BigContainer>
      </div>
    );
}

export default MainPagePosts;
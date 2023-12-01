import { Post } from '@/types/Posts';
import React from 'react';
import PostCard from '../postCard/PostCard';

type PostsListingProps = {
    posts: Post[]
}

function PostsListing({ posts }: PostsListingProps ) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {posts.map((post) => (
          <PostCard
            key={post.title}
            path={`/blog/${post.slug}`}
            heading={post.title}
            category={post.category}
            image={post.image}
            timeToRead={post.timeToRead}
          />
        ))}
      </div>
    );
}

export default PostsListing;
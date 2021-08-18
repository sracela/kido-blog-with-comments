import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = ({ posts }) => (
  <Section
    title="Smarter Decisions Making Starts With KIDO"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    {posts.map((post, index) => (
      <VerticalFeatureRow
        key={post.slug}
        title={post.title[0]}
        description={post.description}
        // image="/assets/images/mac.png"
        image={post.coverImage}
        imageAlt={post.slug}
        slug={post.slug}
        reverse={index % 2 === 0}
      />
    )
    )}
  </Section>

  //   <VerticalFeatureRow
  //     title="CONIL"
  //     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
  //     image="/assets/images/mac.png"
  //     imageAlt="Second feature alt text"
  //     slug=""
  //     reverse
  //   />
  //   <VerticalFeatureRow
  //     title="PAPERS"
  //     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
  //     image="/assets/images/mac.png"
  //     imageAlt="Third feature alt text"
  //     slug=""
  //   />
);

export { VerticalFeatures };

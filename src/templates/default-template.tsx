import React from 'react';
import SEO from '@/components/atoms/seo';
import Layout from '@/components/atoms/layout';

type DefaultPageProps = {
  pageContext: {
    frontmatter: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
};

const DefaultPage: React.FC<DefaultPageProps> = (props) => {
  const {
    children,
    pageContext: {
      frontmatter: { title, subtitle, description },
    },
  } = props;

  return (
    <Layout title={title} subtitle={subtitle}>
      <SEO title={title} description={description} />
      <div>{children}</div>
      <div>This is the basepage</div>
    </Layout>
  );
};

export default DefaultPage;

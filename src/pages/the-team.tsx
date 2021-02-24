import SEO from '@/components/atoms/seo';
import Layout from '@/components/atoms/layout';
import React from 'react';
import '@/style/base.scss';
import { TeamSection } from '@/components/sections/team-section';
import { PageProps } from "gatsby";

const TeamPage: React.FC<PageProps> =  () => {
  const title = 'The Team';
  const description = 'The African Tech Enthusiasts Team.';

  return (
    <>
      <SEO title={title} description={description} />
      <Layout title={title}>
        <TeamSection />
      </Layout>
    </>
  );
};

export default TeamPage

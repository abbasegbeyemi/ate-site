import React from 'react';
import { PageProps } from 'gatsby';
import SEO from '@/components/seo';
import Layout from '@/components/layout';
import '@/style/base.scss';
import { InfoSection } from '@/components/info-section';
import { TeamSection } from '@/components/team-section';

const Home: React.FC<PageProps> = () => {
  const title = 'African Tech Enthusiasts',
    subtitle = 'Empowering african youth through technology';
  return (
    <>
      <SEO title={'Home'} />
      <Layout title={title} subtitle={subtitle}>
        <InfoSection />
        <TeamSection />
      </Layout>
    </>
  );
};

export default Home;

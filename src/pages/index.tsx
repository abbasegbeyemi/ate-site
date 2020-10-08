import React from 'react';
import { PageProps } from 'gatsby';
import SEO from '@/components/seo';
import Layout from '@/components/layout';
import '@/style/base.scss';
import { AboutSection } from '@/components/about-section';
import { TeamSection } from '@/components/team-section';
import { EventsSection } from '@/components/events-section';

const Home: React.FC<PageProps> = () => {
  const title = 'African Tech Enthusiasts',
    subtitle = 'Empowering African youth through technology';
  return (
    <>
      <SEO title={'Home'} />
      <Layout title={title} subtitle={subtitle}>
        <AboutSection />
        <EventsSection />
        <TeamSection />
      </Layout>
    </>
  );
};

export default Home;

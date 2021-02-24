import React from 'react';
import { PageProps } from 'gatsby';
import SEO from '@/components/atoms/seo';
import Layout from '@/components/atoms/layout';
import '@/style/base.scss';
import { AboutSection } from '@/components/sections/about-section';
import { TeamSection } from '@/components/sections/team-section';
import { EventsSection } from '@/components/sections/events-section';
import ArticlesSection from '@/components/sections/articles-section';

const Home: React.FC<PageProps> = () => {
  const title = 'African Tech Enthusiasts',
    subtitle = 'Empowering African youth through technology';
  return (
    <>
      <SEO title={'Home'} />
      <Layout title={title} subtitle={subtitle}>
        <AboutSection />
        <ArticlesSection />
      </Layout>
    </>
  );
};

export default Home;

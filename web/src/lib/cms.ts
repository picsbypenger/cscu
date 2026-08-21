import siteSettings from '../data/siteSettings.json';
import teamData from '../data/team.json';
import servicesData from '../data/services.json';
import faqsData from '../data/faqs.json';

// Simulated async fetches to easily swap with Sanity/Contentful client later
export async function getSiteSettings() {
  return siteSettings;
}

export async function getTeamInfo() {
  return teamData;
}

export async function getServices() {
  return servicesData;
}

export async function getFaqs() {
  return faqsData;
}

const mapping: Record<string, string> = {
  campaigns: 'campaign',
  customers: 'customer',
  organizations: 'organization',
  'social-media-profiles': 'social_media_profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

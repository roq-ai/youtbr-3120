const mapping: Record<string, string> = {
  comments: 'comment',
  organizations: 'organization',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

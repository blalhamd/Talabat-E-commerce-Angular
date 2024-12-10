export const RolesAndPermissions = {
  AdminOnly: (claims: any) =>
    claims.role ===
    'Admin' /* && claims.permissions.includes('CanViewProducts') */,
  UserOnly: (claims: any) => claims.role === 'user',
  AdminAndUser: (claims: any) =>
    claims.role === 'Admin' || claims.role === 'user',
};

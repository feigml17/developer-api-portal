export const products = [
  {
    name: 'Shipment Tracking',
    slug: 'shipment-tracking',
    description: 'Follow shipments, milestones and proof-of-delivery events in near real time.',
    version: 'v1',
    category: 'Visibility',
    endpoint: 'GET /tracking/v1/shipments/{id}',
    uptime: '99.99%',
  },
  {
    name: 'Location Intelligence',
    slug: 'location-intelligence',
    description: 'Validate addresses and find service points across supported regions.',
    version: 'v2',
    category: 'Location',
    endpoint: 'POST /location/v2/validate',
    uptime: '99.97%',
  },
  {
    name: 'Rate & Quote',
    slug: 'rate-quote',
    description: 'Retrieve available delivery products, prices and estimated transit times.',
    version: 'v1',
    category: 'Shipping',
    endpoint: 'POST /rates/v1/quotes',
    uptime: '99.95%',
  },
];


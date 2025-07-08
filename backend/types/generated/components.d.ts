import type { Schema, Struct } from '@strapi/strapi';

export interface MyComponentsAddress extends Struct.ComponentSchema {
  collectionName: 'components_my_components_addresses';
  info: {
    description: '';
    displayName: 'Contact data';
    icon: 'user';
  };
  attributes: {
    address: Schema.Attribute.Component<
      'my-components.address-for-location',
      false
    >;
    emailAddress: Schema.Attribute.Email;
    firstName: Schema.Attribute.String;
    lastName: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String;
  };
}

export interface MyComponentsAddressForLocation extends Struct.ComponentSchema {
  collectionName: 'components_my_components_address_for_locations';
  info: {
    displayName: 'AddressForLocation';
    icon: 'pinMap';
  };
  attributes: {
    city: Schema.Attribute.String;
    Country: Schema.Attribute.String;
    number: Schema.Attribute.Integer;
    Street: Schema.Attribute.String;
    zipCode: Schema.Attribute.String;
  };
}

export interface MyComponentsOpeningHours extends Struct.ComponentSchema {
  collectionName: 'components_my_components_opening_hours';
  info: {
    displayName: 'Opening hours';
    icon: 'clock';
  };
  attributes: {
    closed: Schema.Attribute.Time & Schema.Attribute.Required;
    day: Schema.Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]
    >;
    open: Schema.Attribute.Time & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'my-components.address': MyComponentsAddress;
      'my-components.address-for-location': MyComponentsAddressForLocation;
      'my-components.opening-hours': MyComponentsOpeningHours;
    }
  }
}

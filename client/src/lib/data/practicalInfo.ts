import { IconType } from 'react-icons';
import { FiClock, FiMapPin, FiPhone } from 'react-icons/fi';

export interface PracticalInfoItem {
  icon: IconType;
  titleKey: string;
  detailKey: string;
}

export const practicalInfo: PracticalInfoItem[] = [
  {
    icon: FiClock,
    titleKey: 'info.openingHours.title',
    detailKey: 'info.openingHours.detail',
  },
  {
    icon: FiMapPin,
    titleKey: 'info.address.title',
    detailKey: 'info.address.detail',
  },
  {
    icon: FiPhone,
    titleKey: 'info.contact.title',
    detailKey: 'info.contact.detail',
  },
];

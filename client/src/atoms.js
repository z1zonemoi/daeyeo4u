import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const registerFormTitle = atom({
  key: 'registerFormTitle',
  default: '',
});

export const registerFormMaxCapacity = atom({
  key: 'registerFormMaxCapacity',
  default: 1,
});

export const registerFormAddress = atom({
  key: 'registerFormAddress',
  default: '',
});

export const registerFormDetailedAddress = atom({
  key: 'registerFormDetailedAddress',
  default: '',
});

export const registerFormDetailedInformation = atom({
  key: 'registerFormDetailedInformation',
  default: '',
});

export const registerFormCharge = atom({
  key: 'registerFormCharge',
  default: 0,
});

export const registerFormItemsCheckedState = atom({
  key: 'registerFormItemsCheckedState',
  default: [],
});

export const registerFormPreviewImage = atom({
  key: 'registerFormPreviewImage',
  default: [],
});

export const registerFormImage = atom({
  key: 'registerFormImage',
  default: [],
});

export const navSearchValue = atom({
  key: 'navSearchValue',
  default: '',
});

export const categoryFocus = atom({
  key: 'categoryFocus',
  default: 0,
});

export const reservationStartDate = atom({
  key: 'reservationStartDate',
  default: false,
});

export const reservationEndDate = atom({
  key: 'reservationEndDate',
  default: false,
});

export const reservationStartDateChangedState = atom({
  key: 'reservationStartDateChangedState',
  default: null,
});

export const reservationMaxCapacity = atom({
  key: 'reservationMaxCapacity',
  default: 1,
});

export const reservationPlaceBookmarkState = atom({
  key: 'reservationPlaceBookmarkState',
  default: false,
});

export const reservationEditData = atom({
  key: 'reservationEditData',
  default: null,
});

export const mainDataState = atom({
  key: 'mainDataState',
  default: [],
});

export const PlaceIDState = atom({
  key: 'PlaceIDState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const DetailInformation = atom({
  key: 'DetailInformation',
  default: [],
});

export const reservationStartCalendarSelectedDay = atom({
  key: 'reservationStartCalendarSelectedDay',
  default: false,
});

export const reservationEndCalendarSelectedDay = atom({
  key: 'reservationEndCalendarSelectedDay',
  default: false,
});

export const mbtiPlaceDataState = atom({
  key: 'mbtiPlaceDataState',
  default: [],
});

export const bookmarkState = atom({
  key: 'bookmarkState',
  default: '',
});

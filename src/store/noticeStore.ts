import { create } from 'zustand';

interface noticeDetailItemsProps {
  content: string | undefined;
  createDetailNoticeDate: string | undefined;
}

interface noticeDataProps {
  noticeTitle: string | undefined;
  noticeDate: string | undefined;
  noticeDetailItems: noticeDetailItemsProps[];
}

interface noticeState {
  nonFaceTreatment: noticeDataProps;
  psychologicalCounseling: noticeDataProps;
  community: noticeDataProps;

  setNonFaceTreatment: (data: noticeDataProps) => void;
  setPsychologicalCounseling: (data: noticeDataProps) => void;
  setCommunity: (data: noticeDataProps) => void;
}

const noticeStore = create<noticeState>()((set) => ({
  nonFaceTreatment: {
    noticeTitle: undefined,
    noticeDate: undefined,
    noticeDetailItems: [
      {
        content: undefined,
        createDetailNoticeDate: undefined,
      },
    ],
  },
  psychologicalCounseling: {
    noticeTitle: undefined,
    noticeDate: undefined,
    noticeDetailItems: [
      {
        content: undefined,
        createDetailNoticeDate: undefined,
      },
    ],
  },
  community: {
    noticeTitle: undefined,
    noticeDate: undefined,
    noticeDetailItems: [
      {
        content: undefined,
        createDetailNoticeDate: undefined,
      },
    ],
  },

  setNonFaceTreatment: (data: noticeDataProps) =>
    set(() => ({
      nonFaceTreatment: data,
    })),
  setPsychologicalCounseling: (data: noticeDataProps) =>
    set(() => ({
      nonFaceTreatment: data,
    })),

  setCommunity: (data: noticeDataProps) =>
    set(() => ({
      nonFaceTreatment: data,
    })),
}));

export default noticeStore;

export const COLORS = {
  background: {
    app: '#0F1115', // uygulama ana arka planı
    surface: '#121317', // ekran, card vb. yüzeyler
    surfaceElevated: '#1A1C21', // modal, popup gibi elevated yüzeyler
  },

  // text
  text: {
    primary: '#FFFFFF', // ana text
    secondary: '#9CA3AF', // secondary text
    disabled: '#6B7280', // disabled text
  },

  // border + divider
  border: {
    card: '#27292F',
    divider: '#2E3036',
  },

  // level Renkleri
  accent: {
    inactive: '#6B7280', // gri, pasif seviye
    primary: '#FF1E1E', // kırmızı, DOMBİLİ
    blue: '#2563EB', // mavi, seviyelere göre
    gold: '#FBBF24', // altın, EFSANEBİLİ
    green: '#08CB00', // yeşil, TOMBİLİ
    purple: '#7E30E1', // mor, KOMİLİ
  },

  // aktif tab
  icon: {
    active: '#FF1E1E',
    inactive: '#9CA3AF',
  },
};

// level renk + isimleri
export const LEVEL_COLORS: Record<number, string> = {
  0: COLORS.accent.inactive,
  1: COLORS.accent.primary, // DOMBİLİ
  2: COLORS.accent.green, // TOMBİLİ
  3: COLORS.accent.blue, // BOMBİLİ
  4: COLORS.accent.purple, // Boombili
  5: COLORS.accent.gold, // Doombili
};

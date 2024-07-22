export interface Project {
  label: string;
  name: string;
  desc: string;
  links: Link[];
  colorDark: ThemeColor;
  colorLight: ThemeColor;
  category: string;
  year: string;
  company: string;
  personal: boolean;
  tech: string[];
}

interface Link {
  title: string;
  path: string;
}

interface ThemeColor {
  primary: string;
  gradientEllipseLeft: string;
  gradientCircleRight: string;
  gradientEllipse1Right: string;
  gradientEllipse2Right: string;
}

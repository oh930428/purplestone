export interface ResponsiveByDeivceProps {
  maxWidth: string;
  margin: string;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | undefined;
  font: {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
  };
  subFont: {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
  };
}

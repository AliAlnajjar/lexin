import { LayoutProvider } from 'recyclerlistview';
import { Dimensions } from 'react-native';

export class LayoutUtil {
  static getWindowWidth() {
    // To deal with precision issues on android
    return Math.round(Dimensions.get('window').width * 1000) / 1000 - 6;
  }
  static getLayoutProvider(type) {
    
        const layoutProvider=  new LayoutProvider(
          () => {
            return 'VSEL'; 
          },
          (dim, index) => {
            dim.width = 300 ;
            dim.height = 300;
          }
        );
        console.warn(layoutProvider)
        return layoutProvider;
      
    
  }
}

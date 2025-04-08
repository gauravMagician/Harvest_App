import { StyleSheet } from 'react-native';
import {
    scaleFontSize,
    scaleSizeWidth,
} from '../../utils/deviceDimensions';
import ColorConstants from '../../constants/ColorConstants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageAppIcon: {
        width: scaleSizeWidth(200),
        height: scaleSizeWidth(200),
        resizeMode: 'contain',
    },
    appText: {
        color: ColorConstants.WHITE,
        // fontFamily: AppConstants.FONT_DMSANS_EXTRA_BOLD,
        fontSize: scaleFontSize(20),
    },
});

export default styles;

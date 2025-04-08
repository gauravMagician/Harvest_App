// styles.ts
import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleSize, scaleSizeHeight } from '../../../utils/deviceDimensions';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01081A',
    padding: 16,
    // marginBottom: 16
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: scaleFontSize(18),
    fontWeight: '700',
    marginBottom: scaleSizeHeight(15),
  },
  ActivityTitle: {
    color: '#FFF',
    fontSize: scaleFontSize(18),
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10
    // marginVertical: scaleSizeHeight(15),
  },
  cardContainer: {
    backgroundColor: '#11182A',
    padding: 16,
    borderRadius: 10,
  },
  earningRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  earningText: {
    color: '#5E656A',
    fontWeight: '700',
    fontSize: scaleFontSize(14),
    flex: 1,
  },
  progressBarContainer: {
    flex: 2,
    height: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  progressBar: {
    height: 5,
    backgroundColor: '#0360D2',
    borderRadius: 5,
  },
  hvtText: {
    color: '#5E656A',
    fontWeight: '700',
    fontSize: scaleFontSize(14),
    flex: 1,
    textAlign: 'right',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalText: {
    color: '#5E656A',
    fontWeight: '700',
    fontSize: scaleFontSize(14),
  },
  totalValue: {
    color: '#5E656A',
    fontWeight: '700',
    fontSize: scaleFontSize(14),
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#27303F',
    padding: scaleSize(15),
    borderRadius: 10,
    marginBottom: scaleSizeHeight(10),
  },
  activityIcon: {
    width: 20,
    height: 18,
    marginRight: 10,
    tintColor: "#FFFFFF",
  },
  activityText: {
    flex: 1,
    color: '#FFF',
  },
  buttonContainer: {
    backgroundColor: '#0360D2',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
  },
  rewardHistoryButton: {
    alignSelf: "center",
    marginVertical: 20,
    // marginBottom:scaleSizeHeight(20)
  },
  rewardHistoryText: {
    color: "#FFFFFF",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default styles;

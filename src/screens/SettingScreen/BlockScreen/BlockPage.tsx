import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import images from '../../../resources/images';

const usersData = [
  {
    id: '1',
    name: 'noor.designer3',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: true,
  },
  {
    id: '2',
    name: 'hathithuide',
    image: require('../../../resources/images/women.png'),
    isBlocked: true,
  },
  {
    id: '3',
    name: 'zamaeva_1302',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: false,
  },
  {
    id: '4',
    name: 'averil.yeven',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: true,
  },
  {
    id: '5',
    name: 'zigstarco',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: true,
  },
  {
    id: '6',
    name: 'itsmai.777',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: false,
  },
  {
    id: '7',
    name: 'jessbloom_studio',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: true,
  },
  {
    id: '8',
    name: 'dcarter.ux',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: true,
  },
  {
    id: '9',
    name: 'djboybruno',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: false,
  },
  {
    id: '10',
    name: 'jessbloom_studio',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: false,
  },
  {
    id: '11',
    name: 'dcarter.ux',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: true,
  },
  {
    id: '12',
    name: 'djboybruno',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: true,
  },
  {
    id: '13',
    name: 'jessbloom_studio',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: false,
  },
  {
    id: '14',
    name: 'dcarter.ux',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: true,
  },
  {
    id: '15',
    name: 'djboybruno',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: true,
  },
  {
    id: '16',
    name: 'jessbloom_studio',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: false,
  },
  {
    id: '17',
    name: 'dcarter.ux',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: true,
  },
  {
    id: '18',
    name: 'djboybruno',
    image: require('../../../resources/images/preferenceImg.png'),
    isBlocked: false,
  },
];

const BlockListScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const [users, setUsers] = useState(usersData);

  const toggleBlock = (id: string) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, isBlocked: !user.isBlocked } : user,
      ),
    );
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.profileImage} />
      <Text style={styles.username}>{item.name}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          item.isBlocked ? styles.blockedButton : styles.unblockButton,
        ]}
        onPress={() => toggleBlock(item.id)}>
        <Text style={styles.buttonText}>
          {item.isBlocked ? 'Blocked' : 'Unblock'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            source={images.IC_BACK}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Block</Text>
      </View>

      {/* Block List */}
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BlockListScreen;

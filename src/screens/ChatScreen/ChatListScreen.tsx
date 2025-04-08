import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './styles';

interface ChatItem {
  id: string;
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  avatar: string;
}

const chatData: ChatItem[] = [
  {
    id: '1',
    name: 'Daniel Atkins',
    message: 'Lorem ipsum dolor aminic...',
    time: '2:14 PM',
    unreadCount: 1,
    avatar: require('../../resources/images/userpublic.png'),
  },
  {
    id: '2',
    name: 'Daniel Atkins',
    message: 'Lorem ipsum dolor aminic...',
    time: '10:16 PM',
    unreadCount: 80,
    avatar: require('../../resources/images/userpublic.png'),
  },
  {
    id: '3',
    name: 'Daniel Atkins',
    message: '@Philippe: Lorem ipsum...',
    time: 'Friday',
    avatar: require('../../resources/images/notifcationimg.png'),
  },
  {
    id: '4',
    name: 'Daniel Atkins',
    message: 'Lorem ipsum dolor aminic...',
    time: '12/28/20',
    avatar: require('../../resources/images/women.png'),
  },
  {
    id: '5',
    name: 'Daniel Atkins',
    message: 'Lorem ipsum dolor aminic...',
    time: '2:14 PM',
    unreadCount: 1,
    avatar: require('../../resources/images/userpublic.png'),
  },
  {
    id: '6',
    name: 'Daniel Atkins',
    message: 'Lorem ipsum dolor aminic...',
    time: '10:16 PM',
    unreadCount: 80,
    avatar: require('../../resources/images/userpublic.png'),
  },
  {
    id: '7',
    name: 'Daniel Atkins',
    message: '@Philippe: Lorem ipsum...',
    time: 'Friday',
    avatar: require('../../resources/images/notifcationimg.png'),
  },
  {
    id: '8',
    name: 'Daniel Atkins',
    message: 'Lorem ipsum dolor aminic...',
    time: '12/28/20',
    avatar: require('../../resources/images/women.png'),
  },
  {
    id: '9',
    name: 'Daniel Atkins',
    message: 'Lorem ipsum dolor aminic...',
    time: '2:14 PM',
    unreadCount: 1,
    avatar: require('../../resources/images/userpublic.png'),
  },
  {
    id: '10',
    name: 'Daniel Atkins',
    message: 'Lorem ipsum dolor aminic...',
    time: '10:16 PM',
    unreadCount: 80,
    avatar: require('../../resources/images/userpublic.png'),
  },
  {
    id: '11',
    name: 'Daniel Atkins',
    message: '@Philippe: Lorem ipsum...',
    time: 'Friday',
    avatar: require('../../resources/images/notifcationimg.png'),
  },
  {
    id: '12',
    name: 'Daniel Atkins',
    message: 'Lorem ipsum dolor aminic...',
    time: '12/28/20',
    avatar: require('../../resources/images/women.png'),
  },
];

const ChatListScreen: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const handleLongPress = (id: string) => {
    setSelectedChat(id);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.mainSearchView}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="white"
          />
          <Image
            source={require('../../resources/images/search.png')}
            style={styles.searchIcon}
          />
        </View>
        <Image
          source={require('../../resources/images/more.png')}
          style={styles.menuIcon}
        />
      </View>

      {/* Chat List */}
      <FlatList
        data={chatData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onLongPress={() => handleLongPress(item.id)}
            style={[
              styles.chatItem,
              selectedChat === item.id && styles.selectedChat,
            ]}>
            <Image source={item.avatar} style={styles.avatar} />
            {/* <Image source={item.avatar} style={styles.avatar} /> */}
            <View style={styles.chatDetails}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <View style={styles.chatMeta}>
              <Text style={styles.time}>{item.time}</Text>
              {item.unreadCount && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>{item.unreadCount}</Text>
                </View>
              )}
            </View>
            {selectedChat === item.id && (
              <View style={styles.optionsMenu}>
                <TouchableOpacity>
                  <Text style={styles.optionText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.optionText}>Block</Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChatListScreen;

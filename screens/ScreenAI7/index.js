import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
const friendsList = [{
  id: '1',
  name: 'John Doe',
  email: 'john@example.com'
}, {
  id: '2',
  name: 'Jane Doe',
  email: 'jane@example.com'
}, {
  id: '3',
  name: 'William Smith',
  email: 'william@example.com'
}, {
  id: '4',
  name: 'Emma Brown',
  email: 'emma@example.com'
}];

const InviteFriendScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {friendsList.map(friend => <View key={friend.id} style={styles.friendCard}>
            <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.friendImage} />
            <View style={styles.friendInfo}>
              <Text style={styles.friendName}>{friend.name}</Text>
              <Text style={styles.friendEmail}>{friend.email}</Text>
            </View>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteButtonText}>Invite</Text>
            </TouchableOpacity>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  contentContainer: {
    padding: 20
  },
  friendCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    padding: 10
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  friendInfo: {
    flex: 1
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  friendEmail: {
    fontSize: 14,
    color: '#666'
  },
  inviteButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5
  },
  inviteButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
export default InviteFriendScreen;
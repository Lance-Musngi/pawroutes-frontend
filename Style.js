import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF7E9",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#5C4A1E",
    marginTop: 40,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#5C4A1E",
    marginBottom: 30,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#FFB84C",
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: "80%",
    borderRadius: 25,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  buttonText: {
    color: "#5C4A1E",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  adminBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "#FF8FAB",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  adminBtnText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderColor: "#FFDE8F",
    width: "85%",
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: "white",
    color: "#5C4A1E",
  },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: "#FFDE8F",
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5C4A1E",
    marginBottom: 5,
  },

  logoutBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "#FF8FAB",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },

  logoutText: {
    color: "white",
    fontWeight: "bold",
  },

  statusTagPending: {
    backgroundColor: "#FFDE8F",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignSelf: "flex-start",
    marginVertical: 5,
  },

  statusTagCompleted: {
    backgroundColor: "#77DD77",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignSelf: "flex-start",
    marginVertical: 5,
  },

  statusTagCancelled: {
    backgroundColor: "#FF6961",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignSelf: "flex-start",
    marginVertical: 5,
  },

  statusText: {
    color: "white",
    fontWeight: "bold",
  }
});

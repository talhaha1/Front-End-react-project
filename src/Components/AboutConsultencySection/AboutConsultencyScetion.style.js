// styles.js
export const consultingSectionStyles = {
  section: {
    backgroundColor: "#f5f7f8",
    paddingY: 8,
    paddingTop: 20,
  },
  container: {
    maxWidth: "xl",
  },
  contentBox: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: { xs: "center", md: "left" },
    paddingX: { xs: 2, md: 4 },
  },
  heading: {
    flex: 1,
    fontWeight: "bold",
    marginBottom: { xs: 3, md: 0 },
    fontSize: { xs: "2rem", md: "3rem" },
  },
  textBox: {
    flex: 1,
    paddingLeft: { md: 4 },
    textAlign: { xs: "center", md: "left" },
  },
  italicText: {
    fontStyle: "italic",
    marginBottom: 2,
  },
  divider: {
    marginTop: 4,
  },
};

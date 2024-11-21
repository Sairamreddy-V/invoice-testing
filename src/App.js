import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";

// Define styles for the document
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  invoiceDetails: {
    marginBottom: 20,
  },
  itemList: {
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  item: {
    width: "40%",
  },
  price: {
    width: "20%",
    textAlign: "right",
  },
  total: {
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 20,
  },
});

// Create the document structure
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>Invoice</Text>
      </View>
      <View style={styles.invoiceDetails}>
        <Text>Invoice Number: 123456</Text>
        <Text>Invoice Date: November 21, 2024</Text>
        <Text>Customer Name: John Doe</Text>
        <Text>Address: 123 Main Street, City, Country</Text>
      </View>
      <View style={styles.itemList}>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Item</Text>
          <Text style={styles.item}>Description</Text>
          <Text style={styles.price}>Price</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Item 1</Text>
          <Text style={styles.item}>Description of Item 1</Text>
          <Text style={styles.price}>$50.00</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Item 2</Text>
          <Text style={styles.item}>Description of Item 2</Text>
          <Text style={styles.price}>$30.00</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.item}>Item 3</Text>
          <Text style={styles.item}>Description of Item 3</Text>
          <Text style={styles.price}>$20.00</Text>
        </View>
      </View>
      <View style={styles.total}>
        <Text>Total: $100.00</Text>
      </View>
    </Page>
  </Document>
);

// Generate and download the PDF
// const generatePDF = () => {
//   const blob = pdf(<MyDocument />).toBlob();
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = "invoice.pdf";
//   link.click();
// };

const generatePDF = () => {
  const blob = pdf(<MyDocument />).toBlob(); // Generates PDF blob

  blob
    .then((blobData) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blobData); // Create object URL
      link.download = "invoice.pdf";
      link.click();
    })
    .catch((error) => {
      console.error("Error generating PDF blob:", error);
    });
};
// Render the button to trigger PDF generation
const App = () => (
  <div>
    <button onClick={generatePDF}>Download Invoice PDF</button>
  </div>
);

export default App;

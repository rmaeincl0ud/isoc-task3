getCellValue1("Finance","A1:A3")






function getCellValue1(sheetName, cellRange) {
  try {
    // Get the main database spreadsheet
    const spreadsheet = getMainDatabase();
    
    // Get the specified sheet
    const sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) {
      return {
        success: false,
        error: `Sheet '${sheetName}' not found`
        
      };
    }
    
    // Get the range
    const range = sheet.getRange(cellRange);
    
    // Get values
    const values = range.getValues();
    
    // Return JSON based on whether it's a single cell or range
    if (values.length === 1 && values[0].length === 1) {
      // Single cell
      const result = {
        success: true,
        sheetName: sheetName,
        cellRange: cellRange,
        value: values[0][0]
      };
      //console.log('getCellValue - Single Cell:', JSON.stringify(result, null, 2));
      console.log(result);
      return result;
    } else {
      // Range of cells
      const result = {
        success: true,
        sheetName: sheetName,
        cellRange: cellRange,
        values: values
      };
      console.log('getCellValue - Range:', JSON.stringify(result, null, 2));
      return result;
    }
    
  } catch (error) {
    const errorResult = {
      success: false,
      error: error.message
    };
    console.error('getCellValue - Error:', JSON.stringify(errorResult, null, 2));
    return errorResult;
  }
}

function getCellValue2(sheetName, cellRange) {
  try {
    // Get the main database spreadsheet
    const spreadsheet = getMainDatabase();
    
    // Get the specified sheet
    const sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) {
      return {
        success: false,
        error: `Sheet '${sheetName}' not found`
      };
    }
    
    // Get the range
    const range = sheet.getRange(cellRange);
    
    // Get values
    const values = range.getValues();
    
    // Return JSON based on whether it's a single cell or range
    if (values.length === 1 && values[0].length === 1) {
      // Single cell
      const result = {
        success: true,
        sheetName: sheetName,
        cellRange: cellRange,
        value: values[0][0]
      };
      console.log('getCellValue - Single Cell:', JSON.stringify(result, null, 2));
      return result;
    } else {
      // Range of cells
      const result = {
        success: true,
        sheetName: sheetName,
        cellRange: cellRange,
        values: values
      };
      console.log('getCellValue - Range:', JSON.stringify(result, null, 2));
      return result;
    }
    
  } catch (error) {
    const errorResult = {
      success: false,
      error: error.message
    };
    console.error('getCellValue - Error:', JSON.stringify(errorResult, null, 2));
    return errorResult;
  }
}

function getCellValue3(sheetName, cellRange) {
  try {
    // Get the main database spreadsheet
    const spreadsheet = getMainDatabase();
    
    // Get the specified sheet
    const sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) {
      return {
        success: false,
        error: `Sheet '${sheetName}' not found`
      };
    }
    
    // Get the range
    const range = sheet.getRange(cellRange);
    
    // Get values
    const values = range.getValues();
    
    // Return JSON based on whether it's a single cell or range
    if (values.length === 1 && values[0].length === 1) {
      // Single cell
      const result = {
        success: true,
        sheetName: sheetName,
        cellRange: cellRange,
        value: values[0][0]
      };
      console.log('getCellValue - Single Cell:', JSON.stringify(result, null, 2));
      return result;
    } else {
      // Range of cells
      const result = {
        success: true,
        sheetName: sheetName,
        cellRange: cellRange,
        values: values
      };
      console.log('getCellValue - Range:', JSON.stringify(result, null, 2));
      return result;
    }
    
  } catch (error) {
    const errorResult = {
      success: false,
      error: error.message
    };
    console.error('getCellValue - Error:', JSON.stringify(errorResult, null, 2));
    return errorResult;
  }
}

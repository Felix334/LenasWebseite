import openpyxl


# Load the workbook
wb = openpyxl.load_workbook('example.xlsx')
# Select the sheet
sheet = wb.active

# Read a cell
print(sheet['A1'].value)

# Read a row
print(sheet[1].value)

# Read a column

print([cell.value for cell in sheet['A']])
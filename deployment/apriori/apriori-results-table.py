# Import Pandas
import pandas as pd
# Read in Results Summary CSV
apriori_table_df = pd.read_csv('apriori_table_summary_all_categories.csv')
apriori_table_df
# Round Confidence to 2 Decimals
apriori_table_df.style.format({'Confidence': '{:,.2f}'.format})
# Rename Category as segment
apriori_table_df.rename(columns={'Category': 'segment'}, inplace=True)
apriori_table_df
# Export DF as json 
apriori_table_df.to_json(r'apriori_table_data.json',orient='records')
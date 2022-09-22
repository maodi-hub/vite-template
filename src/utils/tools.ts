import { read, utils } from 'xlsx'

export async function getLangsConfig () {
  
  interface President {
    Name: string
    Index: number
  }
  const messages: { [ k : string]: any } = {}
  const langs = ['zh', 'en'] 
  const f = await (await fetch('./langs/en.xlsx')).arrayBuffer()
  const wb = read(f)
  const data = utils.sheet_to_json<President>(wb.Sheets[wb.SheetNames[0]])
  data.forEach((item, index) => {
    console.log(item ,2);
    messages[langs[index]] = item
  })
  return messages
}
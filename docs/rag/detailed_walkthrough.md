# Detailed walkthrough

Go throught the code step-by-step to really understand what't going on

## First load HTML and customize the HTML2text process by bs4

Here is code 
```python
import bs4
from langchain_community.document_loaders import WebBaseLoader

# Only keep post title, headers, and content from the full HTML.
bs4_strainer = bs4.SoupStrainer(class_=("post-title", "post-header", "post-content"))
loader = WebBaseLoader(
    web_paths=("https://lilianweng.github.io/posts/2023-06-23-agent/",),
    bs_kwargs={"parse_only": bs4_strainer},
)
docs = loader.load()

len(docs[0].page_content)
```
### DoucmentLoader 

This is a object ot load data from source and format it into a list

  - [Docs](https://python.langchain.com/docs/how_to/#document-loaders)Detailed documentation on how to use DocumentLoaders.
  
  - [Integrations](https://python.langchain.com/docs/integrations/document_loaders/)160+ integrations to choose from.

  - [Interface](https://python.langchain.com/api_reference/core/document_loaders/langchain_core.document_loaders.base.BaseLoader.html)API reference for the base interface.

# Build a Simple LLM Application with LCEL

install LangChain
```bash
pip instal langchain
```

# LangSmith

## Method One(recommend)

Install python-dotenv and create .env
```bash
pip install python-dotenv 
touch .env 
```
write the following code to file .env
```bash
LANGCHAIN_TRACING_V2="true"
LANGCHAIN_API_KEY="..."
```
auto import env in code
```python
from dotenv import load_dotenv
load_dotenv()  # take environment variables from .env.
# Upon code is all you need
```

## Method Two

Export env in shell or global env
```bash
export LANGCHAIN_TRACING_V2="true"
export LANGCHAIN_API_KEY="..."
```


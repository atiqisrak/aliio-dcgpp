import sys
from transformers import pipeline

# Load model
generator = pipeline('text-generation', model='EleutherAI/gpt-j-6B')

# Get the prompt from the command line argument
prompt = sys.argv[1]

# Generate content
result = generator(prompt, max_length=100, num_return_sequences=1)

# Print the generated content
print(result[0]['generated_text'])

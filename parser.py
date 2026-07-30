import re


# ==========================================================
# Extract Error Title
# ==========================================================

def extract_title(content):
    """
    Extract markdown title.

    Example:
        # SyntaxError
    """

    match = re.search(
        r"^#\s+(.+)$",
        content,
        flags=re.MULTILINE,
    )

    if match:
        return match.group(1).strip()

    return "Unknown Error"


# ==========================================================
# Parse Markdown
# ==========================================================

def parse_markdown(content):
    """
    Parse the markdown file dynamically.

    Returns:

    {
        "title": "...",
        "sections": {
            "What is this error?": "...",
            "When does it occur?": "...",
            ...
        }
    }
    """

    title = extract_title(content)

    pattern = r"##\s+(.*?)\n(.*?)(?=\n##\s+|\Z)"

    matches = re.findall(
        pattern,
        content,
        flags=re.DOTALL,
    )

    sections = {}

    for heading, body in matches:

        sections[heading.strip()] = body.strip()

    return {
        "title": title,
        "sections": sections,
    }


# ==========================================================
# Display Helper
# ==========================================================

def get_section(data, section_name):
    """
    Return one section safely.
    """

    return data["sections"].get(
        section_name,
        "Not Available.",
    )
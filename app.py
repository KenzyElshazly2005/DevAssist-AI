from rag import search_error
from python_analyzer import python_analyze


# ==========================================================
# Analyze User Input
# ==========================================================

def analyze(language, input_type, query):
    """
    Main analysis function used by the web application.

    Parameters:
        language: selected programming language
        input_type: error or code
        query: user input

    Returns:
        Dictionary containing analysis result
    """


    # ======================================================
    # Error Message Flow
    # ======================================================

    if input_type == "error":

        answer = search_error(
            language,
            query,
        )

        return {

            "type": "error",

            "title": answer["title"],

            "sections": answer["sections"],

        }


    # ======================================================
    # Code Analysis Flow
    # ======================================================

    if input_type == "code":


        if language == "python":

            result = python_analyze(query)


        else:

            return {

                "type": "error",

                "title": "Unsupported Language",

                "message":
                    f"Code Analysis is not available for {language.upper()} yet."

            }



        # ==================================================
        # No Error Found
        # ==================================================

        if result["success"]:

            return {

                "type": "success",

                "message": result["message"],

                "output": result.get("output"),

            }



        # ==================================================
        # Error Found -> RAG
        # ==================================================

        answer = search_error(

            language,

            result["error_type"],

        )


        return {

            "type": "error",

            "error_type": result["error_type"],

            "line": result.get("line"),

            "column": result.get("column"),

            "code_line": result.get("code_line"),

            "message": result.get("message"),

            "title": answer["title"],

            "sections": answer["sections"],

        }


    return {

        "type": "error",

        "message": "Invalid input type."

    }
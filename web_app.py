from flask import Flask, render_template, request, jsonify

from rag import search_error
from python_analyzer import python_analyze


# ==========================================================
# Flask App
# ==========================================================

app = Flask(__name__)
print("Loading Flask...")

print("Flask Ready.")
# ==========================================================
# Home Page
# ==========================================================

@app.route("/")
def home():

    return render_template(
        "index.html"
    )



# ==========================================================
# Analyze Request
# ==========================================================

@app.route("/analyze", methods=["POST"])
def analyze():

    print("\n====================================")
    print("NEW REQUEST")
    print("====================================")

    data = request.json

    language = data.get(
        "language"
    )

    input_type = data.get(
        "input_type"
    )

    user_input = data.get(
        "content"
    )


    print(f"Language   : {language}")
    print(f"Input Type : {input_type}")
    print(f"Input Size : {len(user_input)} characters")


    # -----------------------------
    # Error Message Search
    # -----------------------------

    if input_type == "error":

        print("Starting RAG Search...")

        answer = search_error(


            language,

            user_input

        )

        print("RAG Search Finished.")


        print("Response Sent Successfully.")

        return jsonify({

            "success": True,

            "result": answer

        })


    # -----------------------------
    # Code Analysis
    # -----------------------------

    if input_type == "code":



        if language != "python":

            print("Response Sent Successfully.")

            return jsonify({

                "success": False,

                "message":
                "Code analysis is currently available for Python only."

            })

        print("Running Python Analyzer...")

        result = python_analyze(
            user_input
        )

        print("Python Analyzer Finished.")


        if result["success"]:



            print("Response Sent Successfully.")
            return jsonify({

                "success": True,

                "result": {

                    "title":
                    "No Errors Detected",

                    "message":
                    result["message"]

                }

            })


        else:


            print("Searching RAG For Detected Error...")
            answer = search_error(

                language,

                result["error_type"]

            )

            print("RAG Finished.")


            answer["analysis"] = {

                "error_type":
                result["error_type"],

                "line":
                result["line"],

                "message":
                result["message"]

            }


            print("Response Sent Successfully.")
            return jsonify({

                "success": True,

                "result": answer

            })

    print("Response Sent Successfully.")

    return jsonify({

        "success": False,

        "message":
        "Invalid request."

    })


# ==========================================================
# Run Server
# ==========================================================

if __name__ == "__main__":

    app.run(

        debug=True

    )
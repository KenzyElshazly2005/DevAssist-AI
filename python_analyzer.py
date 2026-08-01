import traceback
import io
from contextlib import redirect_stdout

# ==========================================================
# Analyze Python Code
# ==========================================================

def python_analyze(code):

    """
    Analyze Python code.
    """

    try:

        compiled_code = compile(

            code,

            "<user_code>",

            "exec",

        )


    except Exception as error:

        return {

            "success": False,

            "code": code,

            "error_type": type(error).__name__,

            "line": getattr(error, "lineno", None),

            "column": getattr(error, "offset", None),

            "code_line": getattr(error, "text", "").strip()
            if getattr(error, "text", None)
            else None,

            "message": str(error),

            "traceback": traceback.format_exc(),

        }



    try:

        output = io.StringIO()


        with redirect_stdout(output):

            exec(compiled_code, {})


        return {

            "success": True,

            "code": code,

            "error_type": None,

            "message":
                "✅ No errors detected.\nYour code appears to be correct.",

            "output": output.getvalue(),

        }



    except Exception as error:

        tb = traceback.extract_tb(
            error.__traceback__
        )

        last = tb[-1]


        return {

            "success": False,

            "code": code,

            "error_type": type(error).__name__,

            "line": last.lineno,

            "code_line": last.line,

            "message": str(error),

            "traceback": traceback.format_exc(),

        }
export async function GET(req: Request/*, { params }: GetParams*/)
{
    // filename for the file that the user is trying to download
    // const filename = params.filename;
  
    // external file URL
    const URL = "/resume/resume.pdf";
  
    // use fetch to get a response
    const response = await fetch(URL);
  
    // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
    return new Response(response.body, {
      headers: {
        ...response.headers, // copy the previous headers
        "content-disposition": `attachment; filename=Currículo - Bruno Coutinho Remeikis`,
      },
    });
}
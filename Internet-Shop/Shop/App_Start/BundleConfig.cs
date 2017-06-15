using System.Web.Optimization;

namespace Chat
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/ExternalScripts/jquery").Include(
                         "~/ExternalScripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/ExternalScripts/jqueryval").Include(
                        "~/ExternalScripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/ExternalScripts/modernizr").Include(
                        "~/ExternalScripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/ExternalScripts/bootstrap").Include(
                      "~/ExternalScripts/bootstrap.js",
                      "~/ExternalScripts/respond.js"));

            bundles.Add(new StyleBundle("~/ExternalStyles/css").Include(
                      "~/ExternalStyles/bootstrap.css",
                      "~/ExternalStyles/site.css"));
        }
    }
}

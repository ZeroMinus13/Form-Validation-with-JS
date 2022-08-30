!function(){let e=document.getElementById("email"),t=document.getElementById("country"),i=document.getElementById("zipcode"),n=document.getElementById("password"),a=document.getElementById("passwordConfirm"),d=document.getElementsByClassName("errorText");document.getElementById("form").addEventListener("submit",(function(d){e.validity.valid&&t.validity.valid&&i.validity.valid&&n.validity.valid&&a.validity.valid&&n.value===a.value?(d.preventDefault(),alert("yay form submitted!"),window.location.reload()):d.preventDefault()})),e.addEventListener("input",(()=>{e.validity.valueMissing?d[0].innerText="You need to enter an email address.":e.validity.typeMismatch?d[0].innerText="Please enter valid email":e.validity.valid&&(d[0].innerText="")})),t.addEventListener("input",(()=>{t.validity.valueMissing?d[1].innerText="Country name required.":t.validity.patternMismatch?d[1].innerText="No Numbers Allowed.":t.validity.valid&&(d[1].innerText="")})),i.addEventListener("input",(()=>{i.validity.valueMissing?d[2].innerText="Zipcode required":i.validity.patternMismatch?d[2].innerText="Only numbers allowed and up to 5 digits":i.validity.tooShort?d[2].innerText="Too short need 5 digits for example '4 7 6 5 0'":i.validity.valid&&(d[2].innerText="")})),n.addEventListener("input",(()=>{n.validity.valueMissing?d[3].innerText="Password required":n.validity.patternMismatch||n.validity.tooShort?d[3].innerText="Need atleast 6 letters":n.validity.valid&&(d[3].innerText="")})),a.addEventListener("input",(()=>{a.validity.valueMissing?d[4].innerText="Password required":a.validity.patternMismatch||a.validity.tooShort?d[4].innerText="Need atleast 6 letters":a.value!==n.value?(d[4].innerText="Password don't match",a.classList.add("activeerror")):a.validity.valid&&(d[4].innerText="",a.classList.remove("activeerror"))})),document.querySelectorAll("input").forEach((function(e){e.addEventListener("focus",(function(){this.checkValidity()?this.classList.remove("error"):this.classList.add("error")}))}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiQ0FBQSxXQUNFLElBQUlBLEVBQVFDLFNBQVNDLGVBQWUsU0FDaENDLEVBQVVGLFNBQVNDLGVBQWUsV0FDbENFLEVBQVVILFNBQVNDLGVBQWUsV0FDbENHLEVBQVdKLFNBQVNDLGVBQWUsWUFDbkNJLEVBQWtCTCxTQUFTQyxlQUFlLG1CQUMxQ0ssRUFBWU4sU0FBU08sdUJBQXVCLGFBQ3JDUCxTQUFTQyxlQUFlLFFBRTlCTyxpQkFBaUIsVUFBVSxTQUFVQyxHQUVyQ1YsRUFBTVcsU0FBU0MsT0FDZlQsRUFBUVEsU0FBU0MsT0FDakJSLEVBQVFPLFNBQVNDLE9BQ2pCUCxFQUFTTSxTQUFTQyxPQUNsQk4sRUFBZ0JLLFNBQVNDLE9BQzFCUCxFQUFTUSxRQUFVUCxFQUFnQk8sT0FJbkNILEVBQUVJLGlCQUNGQyxNQUFNLHVCQUNOQyxPQUFPQyxTQUFTQyxVQUpoQlIsRUFBRUksZ0JBTU4sSUFDQWQsRUFBTVMsaUJBQWlCLFNBQVMsS0FDMUJULEVBQU1XLFNBQVNRLGFBQ2pCWixFQUFVLEdBQUdhLFVBQVksc0NBQ2hCcEIsRUFBTVcsU0FBU1UsYUFDeEJkLEVBQVUsR0FBR2EsVUFBWSwyQkFDaEJwQixFQUFNVyxTQUFTQyxRQUN4QkwsRUFBVSxHQUFHYSxVQUFZLEdBQzNCLElBR0ZqQixFQUFRTSxpQkFBaUIsU0FBUyxLQUM1Qk4sRUFBUVEsU0FBU1EsYUFDbkJaLEVBQVUsR0FBR2EsVUFBWSx5QkFDaEJqQixFQUFRUSxTQUFTVyxnQkFDMUJmLEVBQVUsR0FBR2EsVUFBWSxzQkFDaEJqQixFQUFRUSxTQUFTQyxRQUMxQkwsRUFBVSxHQUFHYSxVQUFZLEdBQzNCLElBR0ZoQixFQUFRSyxpQkFBaUIsU0FBUyxLQUM1QkwsRUFBUU8sU0FBU1EsYUFDbkJaLEVBQVUsR0FBR2EsVUFBWSxtQkFDaEJoQixFQUFRTyxTQUFTVyxnQkFDMUJmLEVBQVUsR0FBR2EsVUFBWSwwQ0FDaEJoQixFQUFRTyxTQUFTWSxTQUMxQmhCLEVBQVUsR0FBR2EsVUFBWSxrREFDaEJoQixFQUFRTyxTQUFTQyxRQUMxQkwsRUFBVSxHQUFHYSxVQUFZLEdBQzNCLElBR0ZmLEVBQVNJLGlCQUFpQixTQUFTLEtBQzdCSixFQUFTTSxTQUFTUSxhQUNwQlosRUFBVSxHQUFHYSxVQUFZLG9CQUNoQmYsRUFBU00sU0FBU1csaUJBRWxCakIsRUFBU00sU0FBU1ksU0FEM0JoQixFQUFVLEdBQUdhLFVBQVkseUJBR2hCZixFQUFTTSxTQUFTQyxRQUMzQkwsRUFBVSxHQUFHYSxVQUFZLEdBQzNCLElBRUZkLEVBQWdCRyxpQkFBaUIsU0FBUyxLQUNwQ0gsRUFBZ0JLLFNBQVNRLGFBQzNCWixFQUFVLEdBQUdhLFVBQVksb0JBQ2hCZCxFQUFnQkssU0FBU1csaUJBRXpCaEIsRUFBZ0JLLFNBQVNZLFNBRGxDaEIsRUFBVSxHQUFHYSxVQUFZLHlCQUdoQmQsRUFBZ0JPLFFBQVVSLEVBQVNRLE9BQzVDTixFQUFVLEdBQUdhLFVBQVksdUJBQ3pCZCxFQUFnQmtCLFVBQVVDLElBQUksZ0JBQ3JCbkIsRUFBZ0JLLFNBQVNDLFFBQ2xDTCxFQUFVLEdBQUdhLFVBQVksR0FDekJkLEVBQWdCa0IsVUFBVUUsT0FBTyxlQUNuQyxJQUVGekIsU0FBUzBCLGlCQUFpQixTQUFTQyxTQUFRLFNBQVVDLEdBQ25EQSxFQUFRcEIsaUJBQWlCLFNBQVMsV0FDNUJxQixLQUFLQyxnQkFDUEQsS0FBS04sVUFBVUUsT0FBTyxTQUV0QkksS0FBS04sVUFBVUMsSUFBSSxRQUV2QixHQUNGLEdBQ0QsQ0E1RkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xuICBsZXQgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcbiAgbGV0IGNvdW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeScpO1xuICBsZXQgemlwY29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6aXBjb2RlJyk7XG4gIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xuICBsZXQgcGFzc3dvcmRDb25maXJtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkQ29uZmlybScpO1xuICBsZXQgZXJyb3JUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXJyb3JUZXh0Jyk7XG4gIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKFxuICAgICAgIWVtYWlsLnZhbGlkaXR5LnZhbGlkIHx8XG4gICAgICAhY291bnRyeS52YWxpZGl0eS52YWxpZCB8fFxuICAgICAgIXppcGNvZGUudmFsaWRpdHkudmFsaWQgfHxcbiAgICAgICFwYXNzd29yZC52YWxpZGl0eS52YWxpZCB8fFxuICAgICAgIXBhc3N3b3JkQ29uZmlybS52YWxpZGl0eS52YWxpZCB8fFxuICAgICAgcGFzc3dvcmQudmFsdWUgIT09IHBhc3N3b3JkQ29uZmlybS52YWx1ZVxuICAgICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhbGVydCgneWF5IGZvcm0gc3VibWl0dGVkIScpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfSk7XG4gIGVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGlmIChlbWFpbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGVycm9yVGV4dFswXS5pbm5lclRleHQgPSAnWW91IG5lZWQgdG8gZW50ZXIgYW4gZW1haWwgYWRkcmVzcy4nO1xuICAgIH0gZWxzZSBpZiAoZW1haWwudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgICBlcnJvclRleHRbMF0uaW5uZXJUZXh0ID0gJ1BsZWFzZSBlbnRlciB2YWxpZCBlbWFpbCc7XG4gICAgfSBlbHNlIGlmIChlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgZXJyb3JUZXh0WzBdLmlubmVyVGV4dCA9ICcnO1xuICAgIH1cbiAgfSk7XG5cbiAgY291bnRyeS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBpZiAoY291bnRyeS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGVycm9yVGV4dFsxXS5pbm5lclRleHQgPSAnQ291bnRyeSBuYW1lIHJlcXVpcmVkLic7XG4gICAgfSBlbHNlIGlmIChjb3VudHJ5LnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgZXJyb3JUZXh0WzFdLmlubmVyVGV4dCA9ICdObyBOdW1iZXJzIEFsbG93ZWQuJztcbiAgICB9IGVsc2UgaWYgKGNvdW50cnkudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGVycm9yVGV4dFsxXS5pbm5lclRleHQgPSAnJztcbiAgICB9XG4gIH0pO1xuXG4gIHppcGNvZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaWYgKHppcGNvZGUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBlcnJvclRleHRbMl0uaW5uZXJUZXh0ID0gJ1ppcGNvZGUgcmVxdWlyZWQnO1xuICAgIH0gZWxzZSBpZiAoemlwY29kZS52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAgIGVycm9yVGV4dFsyXS5pbm5lclRleHQgPSAnT25seSBudW1iZXJzIGFsbG93ZWQgYW5kIHVwIHRvIDUgZGlnaXRzJztcbiAgICB9IGVsc2UgaWYgKHppcGNvZGUudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAgIGVycm9yVGV4dFsyXS5pbm5lclRleHQgPSBcIlRvbyBzaG9ydCBuZWVkIDUgZGlnaXRzIGZvciBleGFtcGxlICc0IDcgNiA1IDAnXCI7XG4gICAgfSBlbHNlIGlmICh6aXBjb2RlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBlcnJvclRleHRbMl0uaW5uZXJUZXh0ID0gJyc7XG4gICAgfVxuICB9KTtcblxuICBwYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBlcnJvclRleHRbM10uaW5uZXJUZXh0ID0gJ1Bhc3N3b3JkIHJlcXVpcmVkJztcbiAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgZXJyb3JUZXh0WzNdLmlubmVyVGV4dCA9ICdOZWVkIGF0bGVhc3QgNiBsZXR0ZXJzJztcbiAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgICBlcnJvclRleHRbM10uaW5uZXJUZXh0ID0gJ05lZWQgYXRsZWFzdCA2IGxldHRlcnMnO1xuICAgIH0gZWxzZSBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGVycm9yVGV4dFszXS5pbm5lclRleHQgPSAnJztcbiAgICB9XG4gIH0pO1xuICBwYXNzd29yZENvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaWYgKHBhc3N3b3JkQ29uZmlybS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGVycm9yVGV4dFs0XS5pbm5lclRleHQgPSAnUGFzc3dvcmQgcmVxdWlyZWQnO1xuICAgIH0gZWxzZSBpZiAocGFzc3dvcmRDb25maXJtLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgZXJyb3JUZXh0WzRdLmlubmVyVGV4dCA9ICdOZWVkIGF0bGVhc3QgNiBsZXR0ZXJzJztcbiAgICB9IGVsc2UgaWYgKHBhc3N3b3JkQ29uZmlybS52YWxpZGl0eS50b29TaG9ydCkge1xuICAgICAgZXJyb3JUZXh0WzRdLmlubmVyVGV4dCA9ICdOZWVkIGF0bGVhc3QgNiBsZXR0ZXJzJztcbiAgICB9IGVsc2UgaWYgKHBhc3N3b3JkQ29uZmlybS52YWx1ZSAhPT0gcGFzc3dvcmQudmFsdWUpIHtcbiAgICAgIGVycm9yVGV4dFs0XS5pbm5lclRleHQgPSBcIlBhc3N3b3JkIGRvbid0IG1hdGNoXCI7XG4gICAgICBwYXNzd29yZENvbmZpcm0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlZXJyb3InKTtcbiAgICB9IGVsc2UgaWYgKHBhc3N3b3JkQ29uZmlybS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgZXJyb3JUZXh0WzRdLmlubmVyVGV4dCA9ICcnO1xuICAgICAgcGFzc3dvcmRDb25maXJtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZWVycm9yJyk7XG4gICAgfVxuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJlbWFpbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb3VudHJ5IiwiemlwY29kZSIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtIiwiZXJyb3JUZXh0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwidmFsdWVNaXNzaW5nIiwiaW5uZXJUZXh0IiwidHlwZU1pc21hdGNoIiwicGF0dGVybk1pc21hdGNoIiwidG9vU2hvcnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0aGlzIiwiY2hlY2tWYWxpZGl0eSJdLCJzb3VyY2VSb290IjoiIn0=
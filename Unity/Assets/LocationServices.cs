using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LocationServices : MonoBehaviour
{
    public Text longi;
    public Text lat;
    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(GPS());
    }

    IEnumerator GPS()
    {
        Input.location.Start();

        int wait = 20;
        while(Input.location.status == LocationServiceStatus.Initializing && wait > 0)
        {
            yield return new WaitForSeconds(1);
            wait--;
            Debug.Log(wait);
        }
        if(wait < 1) 
        { 
            yield break;
        }
        if (Input.location.status == LocationServiceStatus.Failed)
        {
            yield break;
        }
        else {

            InvokeRepeating("UpdateData", 0.5f, 1f);
        
        }
        
       

    }


    void UpdateData()
    {
        if(Input.location.status == LocationServiceStatus.Running)
        {
            longi.text = Input.location.lastData.longitude.ToString();
            lat.text = Input.location.lastData.latitude.ToString();
            

        }
    }
}
